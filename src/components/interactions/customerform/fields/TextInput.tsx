import React from "react";
import FormInput from "../FormInput";

export interface TextInputProps {
  id: string;
  name: string;
  label: string;
  required: boolean;
  defaultValue?: string;
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ id, name, label, required, defaultValue }, ref) => (
    <FormInput
      id={id}
      name={name}
      label={label}
      type="text"
      required={required}
      defaultValue={defaultValue}
      colSpan="sm:col-span-3"
      ref={ref}
    />
  )
);

TextInput.displayName = 'TextInput';

export default TextInput;

/**
 * TextInput Component
 * 
 * A flexible form input component for name fields (first name, last name, etc.).
 * Renders a FormInput component with configurable label and validation.
 * 
 * Features:
 * - Configurable field ID, name, and label
 * - Text input type with required validation
 * - Responsive layout (spans 3 columns on small screens and up)
 * - Supports default value initialization
 * - Ref forwarding for form integration
 * - Reusable for different name field types
 * 
 * Usage:
 * ```tsx
 * import TextInput from './fields/TextInput';
 * 
 * // First name field
 * <TextInput 
 *   id="firstName" 
 *   name="firstName" 
 *   label="First Name" 
 *   ref={firstNameRef} 
 * />
 * 
 * // Last name field with default value
 * <TextInput 
 *   id="lastName" 
 *   name="lastName" 
 *   label="Last Name" 
 *   defaultValue="Smith"
 *   ref={lastNameRef} 
 * />
 * ```
 * 
 * Dependencies:
 * - FormInput: Shared form input component with styling and validation
 * - React.forwardRef: For ref forwarding to the underlying input element
 * 
 * Props:
 * - id: string - HTML ID attribute for the input field
 * - name: string - Form field name for data submission
 * - label: string - Display label for the input field
 * - defaultValue?: string - Optional default value for the input
 * 
 * @returns TSX.Element - A validated text input field for names
 */
 

