import React from "react";
import formatURL from "../helpers/formatURL";
import formatPhoneNumber from "../helpers/formatPhoneNumber";

function User({user}){
	const userURL = formatURL(user.website);

    return (
		<div className="ds_contact-details">
			<h2 className="ds_contact-details__title">
				{user.name} (ID: {user.id})
			</h2>
			<address>
				<dl>
					<div className="ds_contact-details__item">
						<dt>Address</dt>
						<dd translate="no">{user.address.street}</dd>
					</div>
					<div className="ds_contact-details__item">
						<dt>Email</dt>
						<dd translate="no">
							<a href="mailto:email@gov.scot">{user.email}</a>
						</dd>
					</div>
					<div className="ds_contact-details__item">
						<dt>Phone</dt>
						<dd>{formatPhoneNumber(user.phone)}</dd>
					</div>
					<div className="ds_contact-details__item">
						<dt>Website</dt>
						<dd>
							<a href={userURL} target="_blank" rel="noreferrer">
								{user.website}
							</a>
						</dd>
					</div>
				</dl>
			</address>
		</div>
	);
}

export default User;