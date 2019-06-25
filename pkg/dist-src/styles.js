import { css } from '@sixphere/lit-element';
let mainStyle = css`
:host {
    --blue: #2196f3;
    --indigo: #3f51b5;
    --purple: #9c27b0;
    --pink: #e91e63;
    --red: #f44336;
    --orange: #ff9800;
    --yellow: #ffeb3b;
    --green: #4caf50;
    --teal: #009688;
    --cyan: #00bcd4;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --primary: #009688;
    --secondary: #6c757d;
    --success: #4caf50;
    --info: #03a9f4;
    --warning: #ff5722;
    --danger: #f44336;
    --light: #f5f5f5;
    --dark: #424242;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: "Roboto", "Helvetica", "Arial", sans-serif;
    --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; 
}

:host {
    font-family: var(--font-family-sans-serif);
    font-weight: 300;
}

h4 {
    font-size: 20px;
    font-weight: 300;
    margin: 0;
}

.polaris-numeric-display__wrapper {
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.poalris-numeric-display__circle{
    border: 1px solid #dedede;
    border-radius: 50%;
    width: 120px;
    height: 120px;


    display: flex;
    justify-content: center;
    align-items: center;
}

.poalris-numeric-display__display{
    font-size: 55px;
}

.poalris-numeric-display__title {
    margin-top: 0.5em;
}

.status-success {
    color: var(--success);
    border-color: var(--success);
}

.status-warning {
    color: var(--warning);
    border-color: var(--warning);
}

.status-danger {
    color: var(--danger);
    border-color: var(--danger);
}
`;
export { mainStyle };