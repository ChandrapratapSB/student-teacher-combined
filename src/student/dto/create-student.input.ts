import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class StudentCreateDTO {
    @Field()
    id: string;
  
    @Field()
    firstName: string;
    
    @Field()
    lastName: string;
  
    @Field()
    class: string;
  
    @Field({nullable: true})
    section: string;
}