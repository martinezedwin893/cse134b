// Add/Edit/Remove events
var app = new function() {
  this.el = document.getElementById('events');
  this.events = ['Toys 4 Tots', 'Suicide Awareness Walk', 'Soup for the Homeless'];
  this.Count = function(data) {
    var el   = document.getElementById('counter');
    var name = 'event';
    if (data) {
      if (data > 1) {
        name = 'events';
      }
      el.innerHTML = data + ' ' + name ;
    } else {
      el.innerHTML = 'No ' + name;
    }
  };

  this.FetchAll = function() {
    var data = '';
    if (this.events.length > 0) {
      for (i = 0; i < this.events.length; i++) {
        data += '<tr>';
        data += '<td>' + this.events[i] + '</td>';
        data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
        data += '</tr>';
      }
    }
    this.Count(this.events.length);
    return this.el.innerHTML = data;
  };
  this.Add = function () {
    el = document.getElementById('add-name');
    // Get the value
    var country = el.value;
    if (country) {
      // Add the new value
      this.events.push(country.trim());
      // Reset input value
      el.value = '';
      // Dislay the new list
      this.FetchAll();
    }
  };
  this.Edit = function (item) {
    var el = document.getElementById('edit-name');
    // Display value in the field
    el.value = this.events[item];
    // Display fields
    document.getElementById('spoiler').style.display = 'block';
    self = this;
    document.getElementById('saveEdit').onsubmit = function() {
      // Get value
      var country = el.value;
      if (country) {
        // Edit value
        self.events.splice(item, 1, country.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    }
  };
  this.Delete = function (item) {
    // Delete the current row
    this.events.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };

}
app.FetchAll();
function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}
