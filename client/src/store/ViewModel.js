import { action, observable } from 'mobx';

import formsService from '../services/formsService';
export default class ViewModel {
    @observable baseForm = {};
    @observable forms = [];

    @action.bound updateForm(id) {
        let formIndex = this.forms.findIndex(form => form.id === id);
        if (formIndex < 0) {
            return;
        }
        const selectedForm = this.forms[formIndex];
        if (selectedForm.inheritance) {
            selectedForm.ownBudget = selectedForm.budget;
            selectedForm.budget = this.baseForm.budget;
        } else {
            selectedForm.budget = selectedForm.ownBudget || null;
        }
    }

    @action.bound updateBudget() {
        this.forms = this.forms.map(form => {
            if (form.inheritance) {
                form.budget = this.baseForm.budget;
            }
            return form;
        });
    }

    @action.bound async getBaseForm() {
        const baseForm = await formsService.getBaseForm();
        this.baseForm = baseForm;
    }
    
    @action.bound async getForms() {
        const forms = await formsService.getFormsList();
        this.forms = forms;
    }

    @action.bound async saveForms() {
        const formsData = {
            baseForm: this.baseForm,
            forms: this.forms
        }
        formsService.updateForms(formsData);
    }
}

export const store = new ViewModel();