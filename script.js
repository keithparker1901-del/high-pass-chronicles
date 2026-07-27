const books = [
  {
    order: 1,
    title: 'The Pass That Collects',
    subtitle: 'An Old-World Dark Fantasy of Winter Roads and Dark Mercy',
    kindleDate: 'February 26, 2026', asin: 'B0GQ6VBHKC',
    print: 'Paperback and hardcover submitted June 5, 2026',
    tags: ['road'], themes: 'winter roads · dark mercy · names as payment',
    symbol: '△', palette: 'linear-gradient(155deg,#29343a,#121619 55%,#050607)'
  },
  {
    order: 2,
    title: 'The Road That Remembers',
    subtitle: 'An Old-World Dark Fantasy of Haunted Roads and Buried Oaths',
    kindleDate: 'March 1, 2026', asin: 'B0GGXK18BR',
    print: 'Paperback and hardcover submitted June 5, 2026',
    tags: ['road'], themes: 'haunted routes · pursuit · buried oaths',
    symbol: '⌁', palette: 'linear-gradient(155deg,#3a3129,#17130f 58%,#070605)'
  },
  {
    order: 3,
    title: 'The Stone That Keeps Count',
    subtitle: 'An Old-World Gothic Fantasy of Oaths and Salt',
    kindleDate: 'March 8, 2026', asin: 'B0GRPRCP17',
    print: 'Paperback and hardcover submitted June 5, 2026',
    tags: ['road','mercy'], themes: 'stone · salt · oaths · physical proof',
    symbol: '◇', palette: 'linear-gradient(155deg,#35372f,#161713 55%,#060706)'
  },
  {
    order: 4,
    title: 'The Court Above the Hinge',
    subtitle: 'An Old-World Gothic Fantasy of Judgment and Fire',
    kindleDate: 'March 11, 2026', asin: 'B0GS75HZY5',
    print: 'Paperback and hardcover submitted June 8, 2026',
    tags: ['house','mercy'], themes: 'judgment · fire · thresholds · burden',
    symbol: '⊢', palette: 'linear-gradient(155deg,#44251d,#1b0e0b 57%,#070403)'
  },
  {
    order: 5,
    title: 'The Moon That Hunts',
    subtitle: 'An Old-World Dark Fantasy of Blood, Moonlight, and the Hound-King',
    kindleDate: 'March 17, 2026', asin: 'B0GSSH5XNG',
    print: 'Paperback and hardcover submitted June 5, 2026',
    tags: ['road'], themes: 'folk horror · moonlight · hound · winter watch',
    symbol: '◐', palette: 'linear-gradient(155deg,#222c3d,#0d121b 58%,#040507)'
  },
  {
    order: 6,
    title: 'The Cry That Found the Stones',
    subtitle: 'An Old-World Gothic Fantasy of Mourning and Mountain Roads',
    kindleDate: 'March 23, 2026', asin: 'B0GTN76D5Y',
    print: 'Paperback submitted March 24; hardcover submitted June 14, 2026',
    tags: ['road','mercy'], themes: 'mourning · denied names · stone memory',
    symbol: '△', palette: 'linear-gradient(155deg,#344048,#161d21 57%,#07090a)'
  },
  {
    order: 7,
    title: 'The House That Kept the Last Lamp',
    subtitle: 'An Old-World Gothic Fantasy of Deathwatch and False Mercy',
    kindleDate: 'March 29, 2026', asin: 'B0GR6J5JJ6',
    print: 'Paperback submitted March 29; hardcover submitted June 13, 2026',
    tags: ['house','mercy'], themes: 'deathwatch · lamp · community · false mercy',
    symbol: '♢', palette: 'linear-gradient(155deg,#3b3020,#1a140b 58%,#080603)'
  },
  {
    order: 8,
    title: 'The Lady Beneath Midnight',
    subtitle: 'An Old-World Gothic Fantasy of Beauty, Dominion, and False Inheritance',
    kindleDate: 'April 3, 2026', asin: 'B0GQ55GPLL',
    print: 'Paperback and hardcover submitted June 6, 2026',
    tags: ['house','mercy'], themes: 'beauty · dominion · inheritance · bodily claim',
    symbol: '✧', palette: 'linear-gradient(155deg,#31243b,#140e1a 58%,#060407)'
  },
  {
    order: 9,
    title: 'The House That Would Not Release',
    subtitle: 'An Old-World Gothic Fantasy of Wrongful Keeping and Hard-Won Passage',
    kindleDate: 'April 16, 2026', asin: 'B0GX33F82R',
    print: 'Paperback submitted April 16; hardcover submitted May 30, 2026',
    tags: ['house','mercy'], themes: 'custody · doors · ledgers · wrongful keeping',
    symbol: '▥', palette: 'linear-gradient(155deg,#263229,#101611 58%,#040605)'
  },
  {
    order: 10,
    title: 'The Door of Ninety-Five Nails',
    subtitle: 'The High Pass Chronicles',
    kindleDate: 'May 5, 2026', asin: 'B0GZJYJJ1N',
    print: 'Paperback submitted May 17; hardcover submitted May 26, 2026',
    tags: ['house'], themes: 'door · nails · threshold mystery · consequence',
    symbol: '╫', palette: 'linear-gradient(155deg,#35302a,#16130f 58%,#070605)'
  },
  {
    order: 11,
    title: 'The Twisted Sister',
    subtitle: 'The High Pass Chronicles Book Sixteen',
    kindleDate: 'May 10, 2026', asin: 'B0GZQMFYBS',
    print: 'Paperback submitted May 17; hardcover submitted May 25, 2026',
    tags: ['mercy','house'], themes: 'poisoned wedding · vows · mirrors · possession',
    symbol: '∞', palette: 'linear-gradient(155deg,#42252e,#1a0d12 58%,#070405)'
  },
  {
    order: 12,
    title: 'The Ministry of the Second Dawn',
    subtitle: 'An Old-World Gothic Fantasy of False Mercy, Red Lamps, and Names Returned',
    kindleDate: 'May 16, 2026', asin: 'B0GX5488VK',
    print: 'Paperback submitted May 17; hardcover submitted May 26, 2026',
    tags: ['mercy'], themes: 'red lamps · administration · dependency · names',
    symbol: '☼', palette: 'linear-gradient(155deg,#47241c,#1b0d09 58%,#080403)'
  },
  {
    order: 13,
    title: 'The Mask That Fed the Rats',
    subtitle: 'An Old-World Gothic Fantasy of Mercy, Hunger, and Erased Names',
    kindleDate: 'May 27, 2026', asin: 'B0H34NLK39',
    print: 'Paperback and hardcover submitted May 28, 2026',
    tags: ['mercy'], themes: 'mask · rats · hunger · erased names',
    symbol: '◉', palette: 'linear-gradient(155deg,#32322c,#151510 58%,#050504)'
  }
];

const grid = document.querySelector('#book-grid');
const search = document.querySelector('#book-search');
const filterButtons = [...document.querySelectorAll('.filter-button')];
const noResults = document.querySelector('#no-results');
const dialog = document.querySelector('#book-dialog');
const dialogContent = document.querySelector('#dialog-content');
let activeFilter = 'all';

const escapeHtml = (value) => value.replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));

function cardTemplate(book) {
  return `
    <article class="book-card reveal visible" data-tags="${book.tags.join(' ')}">
      <div class="book-cover" style="--cover-bg:${book.palette}; --symbol:'${book.symbol}'">
        <div class="cover-inner">
          <div class="cover-series">The High Pass Chronicles</div>
          <h3>${escapeHtml(book.title)}</h3>
          <div class="cover-symbol" aria-hidden="true">${book.symbol}</div>
          <div class="cover-author">R. Keith Parker</div>
        </div>
      </div>
      <div class="book-meta">
        <div class="book-order">Production Order ${book.order}</div>
        <h3>${escapeHtml(book.title)}</h3>
        <p>${escapeHtml(book.themes)}</p>
        <div class="book-actions">
          <button type="button" data-book="${book.order}">Details</button>
          <a href="https://www.amazon.com/dp/${book.asin}" target="_blank" rel="noopener">Amazon</a>
        </div>
      </div>
    </article>`;
}

function renderBooks() {
  const query = search.value.trim().toLowerCase();
  const visible = books.filter(book => {
    const matchesFilter = activeFilter === 'all' || book.tags.includes(activeFilter);
    const haystack = `${book.title} ${book.subtitle} ${book.themes}`.toLowerCase();
    return matchesFilter && haystack.includes(query);
  });
  grid.innerHTML = visible.map(cardTemplate).join('');
  noResults.hidden = visible.length > 0;
}

function showBook(order) {
  const book = books.find(item => item.order === Number(order));
  if (!book) return;
  dialogContent.innerHTML = `
    <div class="dialog-layout">
      <div class="dialog-cover" style="--cover-bg:${book.palette}">
        <div>
          <p class="cover-series">The High Pass Chronicles</p>
          <h3>${escapeHtml(book.title)}</h3>
          <div class="cover-symbol" aria-hidden="true">${book.symbol}</div>
          <p class="cover-author">R. Keith Parker</p>
        </div>
      </div>
      <div class="dialog-copy">
        <p class="section-kicker">Production Order ${book.order}</p>
        <h2 id="dialog-title">${escapeHtml(book.title)}</h2>
        <p class="dialog-subtitle">${escapeHtml(book.subtitle)}</p>
        <div class="dialog-details">
          <span><strong>Kindle submitted:</strong> ${book.kindleDate}</span>
          <span><strong>Kindle ASIN:</strong> ${book.asin}</span>
          <span><strong>Print editions:</strong> ${book.print}</span>
          <span><strong>Core themes:</strong> ${book.themes}</span>
        </div>
        <a class="button primary" href="https://www.amazon.com/dp/${book.asin}" target="_blank" rel="noopener">View on Amazon</a>
      </div>
    </div>`;
  dialog.showModal();
}

grid.addEventListener('click', event => {
  const button = event.target.closest('[data-book]');
  if (button) showBook(button.dataset.book);
});
search.addEventListener('input', renderBooks);
filterButtons.forEach(button => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter;
  filterButtons.forEach(item => item.classList.toggle('active', item === button));
  renderBooks();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) dialog.close();
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
nav.addEventListener('click', event => {
  if (event.target.tagName === 'A') {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 20), {passive:true});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.1});
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

const form = document.querySelector('#newsletter-form');
const formStatus = document.querySelector('#form-status');
form.addEventListener('submit', event => {
  event.preventDefault();
  formStatus.textContent = 'This preview form is ready to connect to your mailing-list service; no address was stored.';
});

document.querySelector('#year').textContent = new Date().getFullYear();

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'The High Pass Chronicles',
  author: {'@type':'Person', name:'R. Keith Parker'},
  description: 'Old-world Gothic fantasy of haunted customs, buried wrongs, and hard-won release.',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: books.map(book => ({
      '@type': 'ListItem', position: book.order,
      item: {'@type':'Book', name:book.title, alternateName:`${book.title}: ${book.subtitle}`, author:{'@type':'Person',name:'R. Keith Parker'}, url:`https://www.amazon.com/dp/${book.asin}`, identifier:{'@type':'PropertyValue',propertyID:'ASIN',value:book.asin}}
    }))
  }
};
document.querySelector('#book-schema').textContent = JSON.stringify(schema);
renderBooks();
