import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const getContacts = (state) => state.contacts.items;

export const getLoading = (state) => state.contacts.loading;

export const getError = (state) => state.contacts.error;

export const setFilteredContacts = createSelector(
  [getContacts, selectNameFilter],
  (contacts, contactFilter) => {
    return contacts.filter((contact) => {
      if (typeof contact.name === "string") {
        return contact.name
          .toLowerCase()
          .includes(contactFilter?.toLowerCase());
      }
      return false;
    });
  }
);
