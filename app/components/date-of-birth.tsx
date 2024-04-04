import React, { useRef, useState } from "react";
import { cn } from "app/lib/utils"


function getDob(value: string | undefined): string {
    return value?.replace(/[^0-9]/g, '') || '';
}

function formatDob(dob: string | undefined): string {
    let value = getDob(dob);

    if (value.length > 9) {
        value = value.substring(0, 9);
    }

    if (value.length > 2 && value.length < 5) {
        value = `${value.substring(0, 2)} / ${value.substring(2)}`;
    } else if (value.length > 4) {
        value = `${value.substring(0, 2)} / ${value.substring(2, 4)} / ${value.substring(4)}`;
    }

    return value;

}

export interface DaofBirthInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

const DaofBirthInput = React.forwardRef<HTMLInputElement, DaofBirthInputProps>(
    ({ className, type, value, onBlur, ...props }, ref) => {

        const actualValue = useRef<string>(value?.toString() || '');

        const maskValue = (e: React.FocusEvent<HTMLInputElement, Element>) => {
            let maskedSSN = 'XXX - XX';
            if (actualValue.current.length > 8) {
                maskedSSN += actualValue.current.slice(8);
            } else {
                switch (actualValue.current.length) {
                    case 1:
                        maskedSSN = 'X';
                        break;
                    case 2:
                        maskedSSN = 'XX';
                        break;
                    case 3:
                        maskedSSN = 'XXX';
                        break;
                    case 7:
                        maskedSSN = 'XXX - X';
                        break;
                    case 8:
                        maskedSSN = 'XXX - XX';
                        break;
                    default:
                        maskedSSN = '';
                }
            }

            if (e) {
                e.target.value = maskedSSN;
            }
        };

        const unmaskValue = (e: React.FocusEvent<HTMLInputElement, Element>) => {
            if (e && actualValue.current.length > 0) {
                e.target.value = actualValue.current;
            }
        }

        const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { value } = e.target;
            e.target.value = formatDob(value);
            actualValue.current = formatDob(value);

        };

        return (
            <input
                type={type}
                className={cn(
                    "flex h-14 w-full rounded border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}

                onInput={onChange}
                {...props}
            />
        )
    }
)

DaofBirthInput.displayName = "Input"



export { DaofBirthInput, getDob as getSnnDigits, formatDob as formatSnn }
