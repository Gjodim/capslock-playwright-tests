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
      EMPTY: "",
      tooShort: "123",
      tooLong: "123456",
      nonUmeric: "ABcDe",
      mixed: "12A45",
    },
  },

  emailAddress: {
    valid: {
      validOne: "test@test.com",
    },

    invalid: {
      noUsername: "@test.com",
      noServer: "test@.com",
      noSymbol: "testtest.com",
      noDomain: "test@test",
    },
  },

  name: {
    invalid: {
      EMPTY: "",
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
      tooLong: "12345654321",
      nonNumeric: "ABCDEFGHIJ",
      mixed: "12A45B54C2",
    },

    valid: {
      validOne: "33341248891",
      validTwo: "3897721458",
    },
  },
} as const;
