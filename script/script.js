const root = document.querySelector('.root');
const btn = document.querySelector('.btn');




const createUserCart = (user) => {
	const { name, location, phone, picture } = user;

	const wrapper = document.createElement("div");
	const imgWrapperNode = document.createElement("div");
	const imgNode = document.createElement("img");
	const nameNode = document.createElement("p");
	const phoneNode = document.createElement("p");
	const contryNode = document.createElement("p");

	imgNode.src = picture;
	imgNode.alt = 'user imange';
	nameNode.innerText = `${name.title} ${name.first} ${name.last}`;
	phoneNode.innerText = phone;
	contryNode.innerText = `${location.city},  ${location.country}`;
	wrapper.classList.add('cart');
	imgWrapperNode.classList.add('img-box');

	imgWrapperNode.append(imgNode);

	wrapper.append(imgWrapperNode);
	wrapper.append(nameNode);
	wrapper.append(phoneNode);
	wrapper.append(contryNode);

	return wrapper;
}


const getUsers = async () => {
	try {
		const res = await fetch('https://rs882.github.io/fakeapi/data.json');
		const data = await res.json();
		return data
	} catch (error) {
		return null;
	}
}



btn.addEventListener('click', (e) => {

	getUsers()
		.then(users => {
			const usersCart = users.map(user => createUserCart(user))
			root.append(...usersCart);
		})
		.catch(err => {


		})

})

