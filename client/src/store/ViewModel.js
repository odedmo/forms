import { action, observable } from "mobx";
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

    @action.bound async fetchBaseForm() {
        const wait = async (ms) => {
            return new Promise(resolve => {
                setTimeout(resolve, ms);
            });
        }
        const baseForm = {
            name: 'base-name',
            budget: 100,
        };
        await wait(500);
        this.baseForm = baseForm;
    }
    
    @action.bound async fetchForms() {
        // this.forms = await fetch('/forms');
        const wait = async (ms) => {
            return new Promise(resolve => {
                setTimeout(resolve, ms);
            });
        }
        const forms = [
            {
                id: 1, 
                name: '',
                budget: null,
                inheritance: false
            },
            {
                id: 2, 
                name: '',
                budget: null,
                inheritance: false
            },
            {
                id: 3, 
                name: '',
                budget: null,
                inheritance: false
            },
            {
                id: 4, 
                name: '',
                budget: null,
                inheritance: false
            },
        ];
        await wait(500);
        this.forms = forms;
    }
}

export const store = new ViewModel();