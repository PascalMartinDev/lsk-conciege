import React from "react";
import FormSelect from "../FormSelect";

const GroupSelect = React.forwardRef<HTMLSelectElement, object>(
  (_props , ref) => (
    <FormSelect
      id="group"
      name="group"
      label="Group"
      required={true}
      colSpan="sm:col-span-2"
      selectRef={ref}
      defaultValue="Group 1"
      options={[
        "Group 1",
        "Group 2",
        "Group 2"
      ]}
    />
  )
);

GroupSelect.displayName = 'GroupSelect';

export default GroupSelect;

/**
 * GroupSelect Component
 * 
 * A dropdown selection component for customer group/membership selection.
 * Renders a FormSelect component with predefined group options.
 * 
 * Features:
 * - Pre-configured with Wine Group 1, Group 2, Group 3 options
 * - Rename Group's to meet specific Business applications needed eg VIP, Loyalty Member, Gold Member, Platinum Member
 * - Group type is associated with the type of Discount Strategy Pattern applied to the customer's current account order
 * - Group 1 is set as the default selected value
 * - Required field validation
 * - Responsive grid layout (spans 2 columns on small screens and up)
 * - Supports ref forwarding for form integration
 * 
 * Usage:
 * ```tsx
 * import GroupSelect from './fields/GroupSelect';
 * 
 * // In a form
 * <GroupSelect ref={groupSelectRef} />
 * ```
 * 
 * Dependencies:
 * - FormSelect: Shared form select component with styling and functionality
 * - React.forwardRef: For ref forwarding to the underlying select element
 * 
 * Props: None (component is pre-configured)
 * 
 * @returns TSX.Element - A form select dropdown for group selection
 */
