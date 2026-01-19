export const data = {
  zipCodes: {
    validServiceAvailable: {
      SA_68901: "68901",
      SA_57382: "57382",
    },

    validOutOfService: {
      OUA_11111: "11111",
      OUA_00000: "22222",
    },

    invalid: {
      empty: "",
      tooShort: "123",
      tooLong: "123456",
      nonUmeric: "ABcDe",
      mixed: "12A45",
    },
  },

  emailAddress: {
    valid: {
      validOne: "test@test.com",
      validTwo: "johnDoe@test.com",
      // This may be considered a standard email address according to HTML5 validation
      // Might be good use case to fix (e.g. using a pattern in the HTML element: pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      noDomain: "test@test",
    },

    invalid: {
      empty: "",
      noUsername: "@test.com",
      noServer: "test@.com",
      noSymbol: "testtest.com",
    },
  },

  name: {
    invalid: {
      empty: "",
      nameOnly: "John",
      surnameOnly: "Doe",
      withNumbers: "John1 Doe2",
    },
    valid: {
      JohnDoe: "John Doe",
      JaneDoe: "Jane Doe",
    },
  },

  phoneNumber: {
    invalid: {
      empty: "",
      tooShort: "12345",
      //tooLong: "552345654321", - not valid input as there is max restriction 10
      nonNumeric: "ABcDEfGHIJ",
      mixed: "1!A45b54@2",
    },

    valid: {
      validOne: "33341248891",
      validTwo: "3897721458",
    },
  },
} as const;
