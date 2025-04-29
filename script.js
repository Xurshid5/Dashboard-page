document.addEventListener("DOMContentLoaded", function () {
    loadOverviewPage();
  
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
      item.addEventListener('click', function () {
        document.querySelector('.menu-item.active')?.classList.remove('active');
        this.classList.add('active');
  
        const page = this.dataset.page;
        if (page === 'tickets') {
          loadTicketsPage();
        } else {
          loadOverviewPage();
        }
      });
    });
  
    const changeMode = document.getElementById('changeMode');
    changeMode.addEventListener('click', function () {
      document.body.classList.toggle('dark');
    });
  });
  
  function loadOverviewPage() {
    const content = document.getElementById('content');
    content.innerHTML = `
    <div class="tickets-header">
    <h1>Tickets</h1>
    <button class="add-btn"><i class="fas fa-plus"></i> Add</button>
  </div>

  <div class="ticket-table">
    <table>
      <thead>
        <tr>
          <th>Ticket details</th>
          <th>Customer name</th>
          <th>Date</th>
          <th>Priority</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${generateTicketRow('Contact Email not Linked', 'Tom Cruise', 'May 26, 2019', 'HIGH', 'men/10')}
        ${generateTicketRow('Adding Images to Featured Posts', 'Matt Damon', 'May 26, 2019', 'LOW', 'women/10')}
        ${generateTicketRow('When will I be charged this month?', 'Robert Downey', 'May 26, 2019', 'HIGH', 'men/20')}
        ${generateTicketRow('Payment not going through', 'Christian Bale', 'May 25, 2019', 'NORMAL', 'men/30')}
        ${generateTicketRow('Unable to add replies', 'Henry Cavil', 'May 25, 2019', 'HIGH', 'men/40')}
        ${generateTicketRow('Downtime since last week', 'Chris Evans', 'May 25, 2019', 'NORMAL', 'men/50')}
        ${generateTicketRow('Referral Bonus', 'Sam Smith', 'May 25, 2019', 'LOW', 'men/60')}
        ${generateTicketRow('How do I change my password?', 'Steve Rogers', 'May 24, 2019', 'NORMAL', 'men/70')}
      </tbody>
    </table>
  </div>
    `;
  }
  
  function loadTicketsPage() {
    const content = document.getElementById('content');
    content.innerHTML = `
      <div class="tickets-header">
        <h1>Tickets</h1>
        <button class="add-btn"><i class="fas fa-plus"></i> Add</button>
      </div>
  
      <div class="ticket-table">
        <table>
          <thead>
            <tr>
              <th>Ticket details</th>
              <th>Customer name</th>
              <th>Date</th>
              <th>Priority</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${generateTicketRow('Contact Email not Linked', 'Tom Cruise', 'May 26, 2019', 'HIGH', 'men/10')}
            ${generateTicketRow('Adding Images to Featured Posts', 'Matt Damon', 'May 26, 2019', 'LOW', 'women/10')}
            ${generateTicketRow('When will I be charged this month?', 'Robert Downey', 'May 26, 2019', 'HIGH', 'men/20')}
            ${generateTicketRow('Payment not going through', 'Christian Bale', 'May 25, 2019', 'NORMAL', 'men/30')}
            ${generateTicketRow('Unable to add replies', 'Henry Cavil', 'May 25, 2019', 'HIGH', 'men/40')}
            ${generateTicketRow('Downtime since last week', 'Chris Evans', 'May 25, 2019', 'NORMAL', 'men/50')}
            ${generateTicketRow('Referral Bonus', 'Sam Smith', 'May 25, 2019', 'LOW', 'men/60')}
            ${generateTicketRow('How do I change my password?', 'Steve Rogers', 'May 24, 2019', 'NORMAL', 'men/70')}
          </tbody>
        </table>
      </div>
    `;
  }
  
  function generateTicketRow(title, customer, date, priority, avatarPath) {
    return `
      <tr>
        <td><img class="avatar" src="https://randomuser.me/api/portraits/${avatarPath}.jpg" alt=""> ${title} <br><small>Updated 1 day ago</small></td>
        <td>${customer} <br><small>on 24.05.2019</small></td>
        <td>${date}</td>
        <td><span class="badge ${priority.toLowerCase()}">${priority}</span></td>
        <td><span class="action-menu">⋮</span></td>
      </tr>
    `;
  }
  