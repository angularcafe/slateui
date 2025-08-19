import { Component } from '@angular/core';
import { CodeBlock } from '../../../shared/components/code-block/code-block';

@Component({
  selector: 'docs-cli',
  standalone: true,
  imports: [CodeBlock],
  templateUrl: './cli.html'
})
export class Cli {

}
