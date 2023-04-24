import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  private createSpecificationUseCases: CreateSpecificationUseCase;
  constructor(createSpecificationUseCases: CreateSpecificationUseCase) {
    this.createSpecificationUseCases = createSpecificationUseCases;
  }

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createSpecificationUseCases.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
