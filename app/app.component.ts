import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'my-app',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="example-config">
            Selected range: {{ range | json }}
        </div>
        <kendo-daterange>
            <label>
                <span class="label">Start</span>
                <kendo-dateinput kendoDateRangeStartInput [(value)]="range.start"></kendo-dateinput>
            </label>
            <label>
                <span class="label">End</span>
                <kendo-dateinput kendoDateRangeEndInput [(value)]="range.end"></kendo-dateinput>
            </label>
        </kendo-daterange>
    `,
    styles: [`
      .label {
        display: block;
        font-weight: bold;
        text-indent: 8px;
        color: #656565;
      }
    `]
})
export class AppComponent {
    public range = { start: null, end: null };
}
