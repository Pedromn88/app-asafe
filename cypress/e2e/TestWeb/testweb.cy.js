/// <reference types="cypress" />


let inputUser = '[datatestid="input-username"]'
let inputPass = '[datatestid="input-pass"]'
let buttonSubmit = '[datatestid="submit-loggin"]'
let error = '[datatestid="error"]'

describe('login page ok', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/auth/signin')
        cy.fixture("login").as("login")
    })

    it('Exist 2 input and 1 button', () => {
        cy.get('.container-login').should("exist")
        cy.get(inputUser).should("exist").and("have.length", 1)
        cy.get(inputPass).should("exist").and("have.length", 1)
        cy.get('button,[datatestid="submit-loggin"]').should("exist").and('have.class', 'buttonStyled').and("have.length", 1).and("be.disabled")
        cy.get(error).should("not.exist")
    })
    it('Login correct without error', () => {
        cy.get("@login").then((users) => {
            cy.get(inputUser)
                .should("have.value", "")
                .type(users.user)
                .should("have.value", users.user);
            cy.get(inputPass)
                .should("have.value", "")
                .type(users.pass)
                .should("have.value", users.pass);
        })
        cy.get('[datatestid="error"]').should("not.exist")
        cy.get(buttonSubmit).should("not.disabled").click()
        cy.url().and("contain", "/home");
    })
    it('Login incorrect with error', () => {
        cy.get(inputUser)
            .should("have.value", "")
            .type("pmarti")
            .should("have.value", "pmarti");
        cy.get(inputPass)
            .should("have.value", "")
            .type("1234")
            .should("have.value", "1234");
        cy.get(buttonSubmit).should("be.disabled")
        cy.get(inputUser)
            .clear()
            .should("have.value", "")
            .type("pmartin")
            .should("have.value", "pmartin");
        cy.get(inputPass)
            .clear()
            .should("have.value", "")
            .type("password123")
            .should("have.value", "password123");
        cy.get(buttonSubmit).should("not.disabled").click()
        cy.get('[datatestid="error"]').should("exist").and("have.text", "Username or password incorrect")
    })

    it.only('Login correct without error', () => {
        cy.get("@login").then((users) => {
            cy.get(inputUser)
                .should("have.value", "")
                .type(users.user)
                .should("have.value", users.user);
            cy.get(inputPass)
                .should("have.value", "")
                .type(users.pass)
                .should("have.value", users.pass);
        })
        cy.get('[datatestid="error"]').should("not.exist")
        cy.get(buttonSubmit).should("not.disabled").click()
        cy.url().and("contain", "/home");
        cy.get(".container-home").should("exist")
        cy.get(".container-dashboard").should("exist")
        cy.get(".title-dashboard").should("have.text", "Power Generation in Spain")
        cy.get('[datatestid="select-day"]').should("exist").select("day")
            .should("have.value", "day");
        cy.get(".select-datePicker-start").type("01/10/2024")
        cy.get(".select-datePicker-end").type("01/03/2024")
        cy.get('[datatestid="button-search"').should("be.disabled")
        cy.get(".bg-error").should("be.visible").and("have.text", "Date incorrect")
        cy.get(".select-datePicker-start").clear().type("01/08/2024")
        cy.get(".select-datePicker-end").clear().type("20/10/2024")
        cy.get('[datatestid="button-search"').should("not.disabled").click()
        cy.get(".spinners-loading", { timeout: 5000 }).should("exist")
        cy.get(".title-table-component").should("exist").and("contain", "renovable").and("have.length", 2)
        cy.get(".container-table").should("be.visible").and("have.length", 2)
    })




})


// cy.get(submitButton, { timeout: 8000 }).should("contain", "Submit").click();