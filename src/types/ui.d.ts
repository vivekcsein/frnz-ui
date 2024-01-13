interface FRNZ_ui_ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    label: string;
    variant?: string;
    isOutlined?: boolean;
}

interface FRNZ_context_InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    name: string;
    type?: string;
    placeholder?: string;
    label?: string;
    style?: {
        backgroundColor?: string;
        color?: string;
    }
}

interface FRNZ_ui_InputProps extends FRNZ_context_InputProps {
    id: string | number;
    variant?: string;
}

