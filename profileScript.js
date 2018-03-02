function createPost(statusUpdate) {

  //Box for new post
  var newPost = document.createElement("div");
  newPost.className = "w3-container w3-card w3-white w3-round w3-margin";

  //Text content and object for new post
  var statusText = document.createTextNode(statusUpdate);
  var p = document.createElement("p");
  p.appendChild(statusText);

  //Image content and object for new post
  var img = document.createElement("img");
  img.className = "w3-left w3-circle w3-margin-right";
  img.style = "width:60px";
  img.src = "https://www.w3schools.com/w3images/avatar3.png";

  //Add objects with their content to the new post
  newPost.appendChild(img);
  newPost.appendChild(p);

  //Update feed with new post
  var feed = document.getElementById('middleColumn');
  feed.appendChild(newPost);
}

// Accordion
function displayDetail(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-theme-d1";
    } else {
        x.className = x.className.replace("w3-show", "");
        x.previousElementSibling.className =
        x.previousElementSibling.className.replace(" w3-theme-d1", "");
    }
}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Add/Edit/Remove Interests
var app = new function() {
  this.el = document.getElementById('interests');
  this.interests = ['BBQ', 'Photography', 'Hiking', 'Toys'];
  this.Count = function(data) {
    var el   = document.getElementById('counter');
    var name = 'event';
    if (data) {
      if (data > 1) {
        name = 'interests';
      }
      el.innerHTML = data + ' ' + name ;
    } else {
      el.innerHTML = 'No ' + name;
    }
  };

  this.FetchAll = function() {
    var data = '';
    if (this.interests.length > 0) {
      for (i = 0; i < this.interests.length; i++) {
        data += '<tr>';
        data += '<td>' + this.interests[i] + '</td>';
        data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
        data += '</tr>';
      }
    }
    this.Count(this.interests.length);
    return this.el.innerHTML = data;
  };
  this.Add = function () {
    el = document.getElementById('add-name');
    // Get the value
    var country = el.value;
    if (country) {
      // Add the new value
      this.interests.push(country.trim());
      // Reset input value
      el.value = '';
      // Dislay the new list
      this.FetchAll();
    }
  };
  this.Edit = function (item) {
    var el = document.getElementById('edit-name');
    // Display value in the field
    el.value = this.interests[item];
    // Display fields
    document.getElementById('spoiler').style.display = 'block';
    self = this;
    document.getElementById('saveEdit').onsubmit = function() {
      // Get value
      var country = el.value;
      if (country) {
        // Edit value
        self.interests.splice(item, 1, country.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    }
  };
  this.Delete = function (item) {
    // Delete the current row
    this.interests.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };

}
app.FetchAll();
function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}
