export default function DashboardLayout({children}: {children: React.ReactNode}){
    return (
        <section>
            <nav>
                <h1 style={{fontSize: "5rem", fontWeight: "bold"}}>DashboardUI</h1>
            </nav>
            {children}
        </section>
    )
}