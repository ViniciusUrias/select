import Nav from "../NavBar";

export default function Layout({children}){
    return (
       <>
        <Nav/>
        <div>
        {children}
        </div>
        </>
    )
}