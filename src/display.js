const display = (() => {
  const createDom = () => {
    const main = document.getElementById('main');
    main.classList.add('main');

    const title = document.createElement('h1');
    title.textContent = 'Weather Forecast';
    title.classList.add('maintitle');
    main.appendChild(title);

    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');
    formContainer.id = 'form-container';
    const form = document.createElement('form');
    const formGroup = document.createElement('div');
    formGroup.classList.add('form-group');
    formGroup.classList.add('mx-sm-3');
    formGroup.classList.add('mb-2');
    const formTitle = document.createElement('label');
    formTitle.for = 'inputCity';
    formTitle.classList.add('sr-only');
    formTitle.textContent = 'Search City';
    const formInput = document.createElement('input');
    formInput.type = 'text';
    formInput.id = 'inputCity';
    formInput.placeholder = 'Search City';
    formInput.classList.add('form-control');
    const formButton = document.createElement('button');
    formButton.classList.add('btn');
    formButton.classList.add('btn-secondary');
    formButton.classList.add('mb-2');
    formButton.textContent = 'Search';

    main.appendChild(formContainer);
    formContainer.appendChild(form);
    form.appendChild(formGroup);
    formGroup.appendChild(formTitle);
    formGroup.appendChild(formInput);
    form.appendChild(formButton);

    const locationContainer = document.createElement('div');
    locationContainer.classList.add('location');
    const location = document.createElement('h2');
    location.textContent = 'Location';
    location.id = 'location-title';
    const icon = document.createElement('p');
    icon.textContent = 'Icon';
    main.appendChild(locationContainer);
    locationContainer.appendChild(location);
    locationContainer.appendChild(icon);

    const tempContainer = document.createElement('div');
    tempContainer.classList.add('temperature');
    const degreeSection = document.createElement('div');
    degreeSection.classList.add('degree-section');
    const degree = document.createElement('h2');
    degree.textContent = '23';
    const symbol = document.createElement('span');
    symbol.textContent = 'F';
    const desc = document.createElement('div');
    desc.textContent = "It's hot";
    main.appendChild(tempContainer);
    tempContainer.appendChild(degreeSection);
    degreeSection.appendChild(degree);
    degreeSection.appendChild(symbol);
    tempContainer.appendChild(desc);

    console.log(main);
  };
  return {
    createDom,
  };
})();

export default display;
