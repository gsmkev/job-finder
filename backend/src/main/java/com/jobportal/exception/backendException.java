package com.jobportal.exception;

public class backendException extends Exception {

    private static final long serialVersionUID = 1L;

    public backendException(String message) {
        super(message);
    }

    public backendException(String message, Throwable cause) {
        super(message, cause);
    }
}
