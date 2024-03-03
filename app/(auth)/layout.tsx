const AuthLayout = ({children}: any) => {
    return (
        <div>
            <nav className="bg-red-500 text-wite">
                This is navbar without /auth prefix
            </nav>
            {children}
        </div>
    )
}