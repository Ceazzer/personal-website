export class EntityException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EntityException";
  }
}

export class EntityNotFoundException extends EntityException {
  constructor(message: string) {
    super(message);
    this.name = "EntityNotFoundException";
  }
}

export class EntityAlreadyExistsException extends EntityException {
    constructor(message: string) {
        super(message);
        this.name = "EntityAlreadyExistsException";
    }
}