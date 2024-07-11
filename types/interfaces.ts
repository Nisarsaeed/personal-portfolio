export interface button{
    title: string;
    icon?: React.ReactNode;
    position?: string;
    handleClick?: () => void;
    otherClasses?: string;
}
