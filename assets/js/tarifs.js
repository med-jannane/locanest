// Filtrage dynamique des tarifs
window.addEventListener('DOMContentLoaded', () => {
  const search = document.getElementById('tarif-search');
  const filter = document.getElementById('prix-filter');
  const rows = document.querySelectorAll('#tarif-table tbody tr');
  function update() {
    const val = search.value.toLowerCase();
    const prix = filter.value;
    rows.forEach(row => {
      const type = row.getAttribute('data-type').toLowerCase();
      const prixVal = parseInt(row.getAttribute('data-prix'), 10);
      let show = (!val || type.includes(val));
      if (prix) show = show && prixVal < parseInt(prix, 10);
      row.style.display = show ? '' : 'none';
    });
  }
  if (search) search.addEventListener('input', update);
  if (filter) filter.addEventListener('change', update);
}); 