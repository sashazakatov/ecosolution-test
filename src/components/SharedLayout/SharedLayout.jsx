

const SharedLayout = ({ children }) => { 
    return (
        <>
        <header>header</header>
        <main>
            {children}    
        </main> 
        </>
    );
}

export default SharedLayout;