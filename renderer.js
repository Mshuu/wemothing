// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const serialport = require('serialport')
const createTable = require('data-table')

serialport.list((err, ports) => {
  console.log('ports', ports);
	/**
  if (err) {
    document.getElementById('error').textContent = err.message
    return
  } else {
    document.getElementById('error').textContent = ''
  }

  if (ports.length === 0) {
    document.getElementById('error').textContent = 'No ports discovered'
  }
	**/

  const headers = Object.keys(ports[0])
  ports.forEach(port => CreateButton(port));
})

function CreateButton(port){
	var portName = port.comName;
	console.log('port create: ' + portName);
	var serialContainer = document.getElementById('SerialPortList');

 var buttonnode= document.createElement('input');
 buttonnode.setAttribute('type','button');
 buttonnode.setAttribute('class', 'btn btn-success btn-lg button')
 buttonnode.setAttribute('name',portName);
 buttonnode.setAttribute('value',portName);
 buttonnode.setAttribute("onclick", "UsePort('" + portName + "')");
 serialContainer.appendChild(buttonnode);
 var br = document.createElement("br");
serialContainer.appendChild(br);



}



// Use a Readline parser
