export const nameRegexp =
    /^(?!.*[-␣'ʼ]{2,})(?!^[-␣'ʼ]+)(?!.*[-␣'ʼ]+$)[a-zA-Zа-яА-ЯґҐїЇіІєЄ][-a-zA-Zа-яА-ЯґҐїЇіІєЄ'ʼ␣-]*[a-zA-Zа-яА-ЯґҐїЇіІєЄ]\s?[a-zA-Zа-яА-ЯґҐїЇіІєЄʼ-]*$/u;

export const emailRegexp =
    /^[a-zA-Z0-9]+[._-]?[a-zA-Z0-9-_.]+[a-zA-Z0-9]+@[a-zA-Z0-9]+[.-]?[a-zA-Z0-9-.]+\.[a-zA-Z]{2,}$/;

export const phoneRegexp = /^[0-9]{10}$/;
