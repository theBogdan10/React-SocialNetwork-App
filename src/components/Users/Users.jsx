import React from 'react';
import styles from './users.module.css';

let Users=(props)=>{
    
	if (props.users.length===0){
		props.setUsers(
			[
				{ id: 1, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeiS1LYNYT3EkGxpUeqITtwq9-mV6J8QVnStdoMNDtb4poy0K&s' , fullName: 'Bogdan', status:'too cold', location:{city:'Minsk', country:'Belarus'}, followed:true },
				{ id: 2, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeiS1LYNYT3EkGxpUeqITtwq9-mV6J8QVnStdoMNDtb4poy0K&s' , fullName: 'Leo', status:'How r u ?', location:{city:'Barcelona', country:'Spain'}, followed:false },
				{ id: 3, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeiS1LYNYT3EkGxpUeqITtwq9-mV6J8QVnStdoMNDtb4poy0K&s' , fullName: 'TheCreator', status:'Would u like to chat ?', location:{city:'Moscow', country:'Russia'}, followed:true },
				{ id: 4, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeiS1LYNYT3EkGxpUeqITtwq9-mV6J8QVnStdoMNDtb4poy0K&s' , fullName: '50Cent', status:'Hello,Im grandfa', location:{city:'Paris', country:'France'}, followed:false },
				{ id: 5, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeiS1LYNYT3EkGxpUeqITtwq9-mV6J8QVnStdoMNDtb4poy0K&s' , fullName: 'Dimas', status:'OMG,too hot', location:{city:'Miami', country:'USA'}, followed:true },
			],
		);
	}
	return(
		<div>
			{
				props.users.map(u=><div key={u.id}>
					<span>
						<div>
							<img src={u.photoUrl} className={styles.userPhoto} />
						</div>
						<div>
							{u.followed 
								? <button onClick={()=>{props.unfollow(u.id);}}>Unfollow</button> 
								: <button onClick={()=>{props.follow(u.id);}}>Follow</button> }
						</div>
					</span>
					<span>
						<span>
							<div>{u.fullName}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{u.location.city}</div>
							<div>{u.location.country}</div>
						</span>
					</span>
				</div>)
			}
		</div>
	);
};

export default Users;
