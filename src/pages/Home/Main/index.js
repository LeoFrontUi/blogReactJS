// Hookes
import { useState, useEffect } from "react";
import api from 'services/api';

// API
const Main = ( {content} ) => {

    const [user, setUser] = useState([]);

    useEffect(() => { 

        if (content) {
            api.get('/user/' + content.id_user)
            .then((response) => {
                setUser(response.data);
            })
        } 

    }, []);

    return ( 
        <>
            <div className="py-3 bb-black ">
                <h6 className="color-gray">{content.date}</h6>
                <h6 className="uppercase color-primary">{content.category}</h6>
                <a href="" className="link-title">
                    <h4 className="mt-1">{content.title}</h4>
                </a>
                
                <p className="mt-1">
                    {content.resume}
                </p>
                <div className="mt-2 flex-space">
                    <div className="flex-start-row">
                        <div className="profile">
                            <img src={user.ImageProfile} className="profile-img" alt="" />
                        </div>
                        <div className="ml-2">
                            <h6 className="color-primary">{user.name} {user.surname}</h6>
                            <h6 className="color-gray">{user.user}</h6>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Main;