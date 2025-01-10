/**
 * @returns attributes for a menuitem widget given parameters
 */
export const getMenuItemProps = ({ disabled, parent, expanded, }) => ({
    role: 'menuitem',
    'aria-disabled': disabled ? 'true' : undefined,
    'aria-haspopup': parent ? 'true' : undefined,
    'aria-expanded': expanded ? 'true' : parent ? 'false' : undefined,
});
//# sourceMappingURL=menu-item.js.map