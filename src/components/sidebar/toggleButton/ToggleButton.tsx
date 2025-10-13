const ToggleButton = ({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return <button onClick={() => setOpen((prev: boolean) => !prev)}>Button</button>;
};
export default ToggleButton;
