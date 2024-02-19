import React from "react";
import User from './User';

function UserGrid({users}){

    /* Maps array of users and returns a list item for each user */
    let userList = users.map((user) => {
        return(
            <li className="ds_card  ds_card--has-hover" key={user.id}>
                <User user={user}/>
            </li>
        )
    })

    return (
		<ul className="ds_category-list  ds_category-list--grid  ds_category-list--narrow">
			{userList}
		</ul>
	);
}

export default UserGrid;