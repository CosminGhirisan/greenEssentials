'use strict'

// ===== PRODUCT MODAL ===== //
const modalProduct = document.querySelector('.modal-product');
const overlayModalProduct = document.querySelector('.overlay-modal-product');
const btnCloseModalProduct = document.querySelector('.close-modal-product');
const btnsOpenModalProduct = document.querySelectorAll('.show-modal-product');

const openModalProduct = function () {
  modalProduct.classList.remove('hidden');
  overlayModalProduct.classList.remove('hidden');
};

const closeModalProduct = function () {
  modalProduct.classList.add('hidden');
  overlayModalProduct.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModalProduct.length; i++)
  btnsOpenModalProduct[i].addEventListener('click', openModalProduct);

btnCloseModalProduct.addEventListener('click', closeModalProduct);
overlayModalProduct.addEventListener('click', closeModalProduct);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalProduct.classList.contains('hidden')) {
    closeModalProduct();
  }
});

// ===== FORM MODAL ===== //
const modalForm = document.querySelector('.modal-form');
const overlayModalForm = document.querySelector('.overlay-modal-form');
const btnCloseModalForm = document.querySelector('.close-modal-form');
const btnsOpenModalForm = document.querySelectorAll('.show-modal-form');

const openModalForm= function () {
  modalForm.classList.remove('hidden');
  overlayModalForm.classList.remove('hidden');
};

const closeModalForm= function () {
  modalForm.classList.add('hidden');
  overlayModalForm.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModalForm.length; i++)
  btnsOpenModalForm[i].addEventListener('click', openModalForm);

btnCloseModalForm.addEventListener('click', closeModalForm);
overlayModalForm.addEventListener('click', closeModalForm);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalForm.classList.contains('hidden')) {
    closeModalForm();
  }
});