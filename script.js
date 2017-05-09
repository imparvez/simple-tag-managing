var tag = {
	tags: [],
	addTags: function(){
		var inputData = document.getElementById('inputTags');
		this.tags.push(inputData.value);
		inputData.value = "";
		this.displayTags(this.tags);
	},
	displayTags: function(tags){
		var tagsUI = document.querySelector('ul');
		tagsUI.innerHTML = "";
		tags.map(function(tag, index){
			var tagsLi = document.createElement('li');
			tagsLi.id = index;
			tagsLi.textContent = tag;
			tagsLi.appendChild(this.createDeleteButton());
			tagsUI.appendChild(tagsLi);
		}, this);
	},
	createDeleteButton: function(){
		var deleteButton = document.createElement('i');
	    deleteButton.className = 'fa fa-times';
	    return deleteButton;
	},
	deleteTags: function(pos){
		this.tags.splice(pos, 1);
		this.displayTags(this.tags);
	},
	setUpEventListeners: function(){
		var tagsUl = document.querySelector('ul');
		tagsUl.addEventListener('click', function(event) {
			console.log(event);
	        var elementClicked = event.target;
	        if (elementClicked.className === 'fa fa-times') {
	        	// this.tags.splice(parseInt(elementClicked.parentNode.id), 1);
	        	var pos = parseInt(elementClicked.parentNode.id);
	        	tag.deleteTags(pos);
	        }
	    });
	}
}

tag.setUpEventListeners();