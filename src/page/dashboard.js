import doashboard from "../components/quantri";

const admin = {
    render() {
        return `
        <div class="min-h-full">
        ${doashboard.render()}
       `;
    },
};
export default admin;