// Funzione di richiamo dopo un avvenimento 
document.addEventListener('DOMContentLoaded', function () {
  // Effettua una richiesta HTTP GET al server JSONPlaceholder per ottenere i dati degli appuntamenti
  fetch('http://jsonplaceholder.typicode.com/todos')
      // Gestisce la risposta della richiesta convertendo il corpo della risposta in formato JSON
      .then(response => response.json())
      // Chiamata alla funzione renderAppointments con i dati ottenuti come argomento
      .then(data => renderAppointments(data));
});

// Funzione per renderizzare gli appuntamenti in base allo stato di completamento
function renderAppointments(appointments) {
  // Ottiene gli elementi delle liste degli appuntamenti in sospeso e completati dal DOM
  const pendingList = document.getElementById('pendingAppointments');
  const completedList = document.getElementById('completedList');

  // Itera attraverso ciascun appuntamento
  appointments.forEach(appointment => {
      // Crea un elemento di lista
      const listItem = document.createElement('li');
      // Imposta il contenuto testuale dell'elemento di lista in base allo stato di completamento
      listItem.textContent = `${appointment.title} - ${appointment.completed ? 'Completed' : 'Pending'}`;

      // Aggiunge l'elemento di lista alla lista appropriata in base allo stato di completamento
      if (appointment.completed) {
          completedList.appendChild(listItem);
      } else {
          pendingList.appendChild(listItem);
      }
  });
}

// Funzione per cambiare la visibilità degli appuntamenti completati
function toggleCompleted() {
  const completedAppointments = document.getElementById('completedAppointments');

  // Verifica se gli appuntamenti completati sono attualmente visibili
  if (completedAppointments.style.display === 'none' || completedAppointments.style.display === '') {
      // Se nascosti, mostra gli appuntamenti completati
      completedAppointments.style.display = 'block';
  } else {
      // Se visibili, nascondi gli appuntamenti completati
      completedAppointments.style.display = 'none';
  }
}

// Funzione per cambiare la visibilità di entrambe le liste
function toggleAll() {
  const pendingAppointments = document.getElementById('appointments');
  const completedAppointments = document.getElementById('completedAppointments');

  // Verifica se gli appuntamenti completati sono attualmente visibili
  if (completedAppointments.style.display === 'none' || completedAppointments.style.display === '') {
      // Se nascosti, mostra entrambe le liste
      completedAppointments.style.display = 'block';
      pendingAppointments.style.display = 'block';
  } else {
      // Se visibili, nascondi entrambe le liste
      completedAppointments.style.display = 'none';
      pendingAppointments.style.display = 'none';
  }
}
