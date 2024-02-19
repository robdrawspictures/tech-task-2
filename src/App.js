import axios from 'axios';
import './App.css';
import "../node_modules/@scottish-government/design-system/dist/css/design-system.css";
import { useState, useEffect } from 'react';
import UserGrid from './components/UserGrid.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import formatName from './helpers/formatName.js';

function App() {
    const [data, setData] = useState();

		/* Simulate loading delay */
		function timeOut(ms){
			return new Promise(resolve => setTimeout(resolve, ms));
		}

		/* On load, triggers API call to fetch data for app */
		useEffect(() => {
			const fetchUsers = async () => {
				await timeOut(3000);
				try {
					let res = await axios.get(
						"https://jsonplaceholder.typicode.com/users"
					);
					let json = res.data;
					setData(json);
				} catch (err) {
					console.log(err);
				}
			};
			fetchUsers();
		}, []);

    let sortedData = data && data.sort(function (a, b) {
		a = formatName(a.name)
		b = formatName(b.name);
		
      	return a.localeCompare(b);
    })

    // console.log(sortedData);

	/* Loading wheel displayed until data is returned */
    if (!data) {
			return (
				<>
					<div className="loading-container">
						<h2>Now Loading...</h2>
						<div className="lds-ring">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
				</>
			);
		}

  return (
    <div className="ds_page">
        <div className="ds_page__top">
          <Header />
        </div>

        <div className="ds_page__middle">
          <UserGrid users = {sortedData}/>
        </div>

        <div className="ds_page__bottom">
			<Footer />
        </div>
    </div>
  );
}

export default App;
