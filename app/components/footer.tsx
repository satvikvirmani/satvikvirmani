const Footer = () => {
    return ( 
        <footer className="p-4 flex flex-row justify-between text-gray-400 text-sm">
            <span>&copy; Satvik Virmani</span>
            <span>{new Date().getFullYear()}</span>
        </footer>
     );
}
 
export default Footer;