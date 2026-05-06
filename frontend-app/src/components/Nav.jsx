const  Nav=function(){
    return(
        <nav style={{backgroundColor:"blue",height:"90px"}}>
            <ol style={{display:"flex",
                justifyContent:"space-evenly",
                alignItems:"center",
                height:"80px"
            }}>
                <li style={ListStyling.list}>Home</li>
                <li style={ListStyling.list}>Login</li>
                <li style={ListStyling.list}>Register</li>
                <li style={ListStyling.list}>About</li>
            </ol>
        </nav>
    )
}


const ListStyling={
    list:{
        backgroundColor:"pink",
        padding:"10px 20px",
        fontsize:"22px",
        fontstyle:"italic",
        fontheight:"bold"
    }
}
export default Nav;

