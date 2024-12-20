const markup = `<div class="p-5"><!-- this is a sample comment node -->
  <div id="alertDemo" class="alert alert-warning alert-dismissible fade show" data-bs-op1="false" data-bs-op2="true" data-bs-op3="10" data-bs-title="" role="alert">
    <button role="button" type="button" class="btn-close bg-none" data-bs-target="alertDemo" data-bs-dismiss="alert" aria-label="Close">
      <svg viewBox="0 0 16 16">
        <path name="x" d="M4.646 4.646a0.5 0.5 0 0 1 0.708 0L8 7.293l2.646 -2.647a0.5 0.5 0 0 1 0.708 0.708L8.707 8l2.647 2.646a0.5 0.5 0 0 1 -0.708 0.708L8 8.707l-2.646 2.647A0.5 0.5 0 0 1 4.646 10.646L7.293 8L4.646 5.354a0.5 0.5 0 0 1 0 -0.708z"></path>
        <svg viewBox="0 0 16 16" class="nested-svg">
          <path name="x" d="M4.646 4.646a0.5 0.5 0 0 1 0.708 0L8 7.293l2.646 -2.647a0.5 0.5 0 0 1 0.708 0.708L8.707 8l2.647 2.646a0.5 0.5 0 0 1 -0.708 0.708L8 8.707l-2.646 2.647A0.5 0.5 0 0 1 4.646 10.646L7.293 8L4.646 5.354a0.5 0.5 0 0 1 0 -0.708z"></path>
        </svg>
      </svg>
      This is button
    </button>
    <p><b>Holy guacamole!</b> Best check yo self, you're not looking too good.</p>
    <button class="btn btn-outline-secondary">
      ReadMore
    </button>
    <img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgODAgNDMiIHdpZHRoPSI4MCIgaGVpZ2h0PSI0MyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9IndoaXRlIiBzdHJva2U9IiNjY2MiIHN0cm9rZS13aWR0aD0iMSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcng9IjUiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgIDx0ZXh0IGRpcmVjdGlvbj0ibHRyIiBmaWxsPSIjMzMzIiB4PSIyNSIgeT0iMjUiIGZvbnQtc2l6ZT0iMTQiPklNRzwvdGV4dD4NCiAgICAgICAgICAgICAgICA8L3N2Zz4=" alt="Image">
  </div>

  <dialog>
    <p id="elem-inside-dialog">Greetings, one and all!</p>
    <form method="dialog">
      <button>OK</button>
    </form>
  </dialog>

  <div class="position-relative">
    <span id="elem-inside-relative">SPAN</span>
  </div>

  <div class="position-absolute">
    <span id="elem-inside-absolute">SPAN</span>
  </div>

  <div class="position-fixed">
    <span id="elem-inside-fixed">SPAN</span>
  </div>

  <div class="position-static">
    <span id="elem-inside-static">SPAN</span>
  </div>

  <table class="table">
    <thead>
      <tr>
        <th>Event Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>show.bs.tooltip</code></td>
        <td>This event fires immediately when the <code>show</code> instance method is called.<br>
          <b id="elem-inside-table">This event can be default prevented.</b></td>
      </tr>
      <tr>
        <td><code>shown.bs.tooltip</code></td>
        <td>This event is fired when the tooltip has been made visible to the user.</td>
      </tr>
      <tr>
        <td><code>hide.bs.tooltip</code></td>
        <td>This event is fired immediately when the <code>hide</code> instance method has been called.<br>
          <b>This event can be default prevented.</b></td>
      </tr>
      <tr>
        <td><code>hidden.bs.tooltip</code></td>
        <td>This event is fired when the tooltip has finished being hidden from the user.</td>
      </tr>
    </tbody>
  </table>
</div>
`;

export const getExampleDOM = () => {
  const tempDocument = new DOMParser().parseFromString(markup, 'text/html');
  const container = tempDocument.body.querySelector('div')!;

  return container;
};
