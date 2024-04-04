import React, { useRef, useState } from "react";
import { cn } from "app/lib/utils"


function getSnnDigits(value: string | undefined): string {
    return value?.replace(/[^0-9]/g, '') || '';
}

function formatSnn(ssn: string | undefined): string {
    let value = getSnnDigits(ssn);

    if (value.length > 9) {
        value = value.substring(0, 9);
    }

    if (value.length > 3 && value.length < 6) {
        value = `${value.substring(0, 3)} - ${value.substring(3)}`;
    } else if (value.length > 5) {
        value = `${value.substring(0, 3)} - ${value.substring(3, 5)} - ${value.substring(5)}`;
    }
    return value;
}

export interface SnnInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

const SnnInput = React.forwardRef<HTMLInputElement, SnnInputProps>(
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
            e.target.value = formatSnn(value);
            actualValue.current = formatSnn(value);

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
                onBlur={maskValue}
                onFocus={unmaskValue}
                {...props}
            />
        )
    }
)

SnnInput.displayName = "Input"



export { SnnInput, getSnnDigits, formatSnn }
