const todoInput = document.querySelector('#todo-input')
const todoError = document.querySelector('#todo-error')
const todoAddBtn = document.querySelector('#todo-add-btn')

const ulList = document.querySelector('#ul-list')
const todoEditBtn = document.querySelector('#todo-edit-btn')
const todoDeleteBtn = document.querySelector('#todo-delete-btn')

const popup = document.querySelector('#popup')
const popupInput = document.querySelector('#popup-input')
const popupSaveBtn = document.querySelector('#popup-edit-save')
const popupCancelBtn = document.querySelector('#popup-edit-cancel')
const popupError = document.querySelector('#popup-error')

let editedTodo
let liID = 1

const addNewTodo = () => {
	if (todoInput.value !== '') {
		const newTodo = document.createElement('li')
		newTodo.classList.add('todo-list__li')
		newTodo.setAttribute('ID', liID)
		newTodo.innerHTML = `<p class="todo-list__paragraf">${todoInput.value}</p>
    <div class="todo-list__tools">
        <p class="todo-list__tools-p" id="todo-edit-btn" onclick="editTodo(${liID})">edit</p>
        <i class="todo-list__tools-x fa-solid fa-xmark" id="todo-delete-btn" onclick="deleteTodo(${liID})"></i>
    </div>`
		ulList.appendChild(newTodo)
		liID++
		todoError.style.visibility = 'hidden'
		todoInput.value = ''
	} else {
		todoError.style.visibility = 'visible'
	}
}

const deleteTodo = id => {
	const TodoToDelete = document.getElementById(id)
	ulList.removeChild(TodoToDelete)
}

const editTodo = id => {
	editedTodo = document.getElementById(id)
	popupInput.value = editedTodo.firstChild.textContent
	popup.classList.add('show-popup')
}

const newTodo = () => {
	if (popupInput.value !== '') {
		editedTodo.firstChild.textContent = popupInput.value
		popup.classList.remove('show-popup')
	} else {
		popupError.style.display = 'flex'
	}
}

const cancelPopup = () => {
	popup.classList.remove('show-popup')
}

const enterCheck = () => {
	if (event.keyCode === 13) {
		addNewTodo()
	}
}

popupCancelBtn.addEventListener('click', cancelPopup)
popupSaveBtn.addEventListener('click', newTodo)
todoAddBtn.addEventListener('click', addNewTodo)
todoInput.addEventListener('keyup', enterCheck)
