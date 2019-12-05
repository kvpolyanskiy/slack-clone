import { Query, Resolver } from 'type-graphql';

@Resolver()
export class TestResolver {
  @Query()
  hello(): string {
    return 'Hello World!';
  }
}
