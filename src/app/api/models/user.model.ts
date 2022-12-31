export interface AuthenticatorUser{
     id:                  string;
    first_name:          string;
    last_name:           string;
    email:               string;
    password:            string;
    location:            null;
    title:               null;
    description:         null;
    tags:                null;
    avatar:              null;
    language:            null;
    theme:               string;
    tfa_secret:          null;
    status:              string;
    role:                string;
    token:               null;
    last_access:         Date;
    last_page:           string;
    provider:            string;
    external_identifier: null;
    auth_data:           null;
    email_notifications: boolean;
}