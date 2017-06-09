export default `
<div class="sv-row">
  <div class="sv-col-md-12">
    <div class="sv-panel sv-panel-primary">
      <div class="sv-panel-heading">
        <h2 class="sv-panel-title">
          Your existing requests<span class="resd-bp sv-hidden">(SLP.RESD-BP-SV-PPT-1)</span>
        </h2>
      </div>
      <div class="sv-panel-body">
        <div class="sv-form-container">
          <div class="sv-form-horizontal">
            <fieldset>
              <legend>
                Your existing requests<span class="resd-bp sv-hidden">(SLP.RESD-BP-SV-PPT-1)</span>
              </legend>


          <input type="hidden" name="#.TTE.MENSYS.1-1" value="DhJDUkVTRC1TVFVWSUVXAyJDMQ=="><input type="hidden" name="#CRC.TTE.MENSYS.1-1" value="656BB66B">

              <div>
<span class="resd-highlight"><span class="resd-bp sv-hidden">(Start SLP.RESD-BP-SV-GT-1)</span><span class="resd-bp sv-hidden">(End SLP.RESD-BP-SV-GT-1)</span></span>
</div><br>

<div id="page">
<div id="unsubmitted" class="sv-panel sv-panel-danger requestPanel sv-panel-collapsible sv-panel-expanded">
	<div class="sv-panel-heading" role="heading" tabindex="0" id="sv-ph-c28273b8-a993-4593-8bb1-dfad7f0eb99e" aria-controls="sv-pb-156eda8c-c312-433c-8239-e544e4045484" aria-expanded="true">RESD Requests Awaiting Submission</div>
	<div class="sv-panel-body" id="sv-pb-156eda8c-c312-433c-8239-e544e4045484" aria-labelledby="sv-ph-c28273b8-a993-4593-8bb1-dfad7f0eb99e" aria-hidden="false">


		<a id="openRequestsAjax" href="ajaxurl" style="display:none">View Requests</a>

		<div id="newRequest" class="sv-text-center" style="display:none;">
			<a class="sv-btn sv-btn-primary" id="beginNewRequest" href="../run/SIW_YMHD.start_url?697651B03F9B11E7EbiKKFcMeMxFFSgnAJ-yHVJ1h3VyX4hAbkePBkVc7Avx6JwS6WqIMxPr-kFQC_0UBF4vyKrzQsK9e7UrWiqkGi6FTQKoyqQe2_RdAKp4Fh2q7K0moi5ulK8-jkBp3bPtIe3ooBPcKPQFDjs9OuQusvjcYVK7Zp6cJn8uDk_j3cU">
				Begin New Request
			</a>
		</div>
		<div id="openRequests" style="display:table;width:100%;">
			<div class="tablesaw-bar mode-columntoggle"><div class="tablesaw-columntoggle-btnwrap tablesaw-advance"><a href="#table-517-popup" class="btn btn-micro tablesaw-columntoggle-btn tablesaw-nav-btn down" data-popup-link=""><span>Columns</span></a><div class="dialog-table-coltoggle tablesaw-columntoggle-popup" id="table-517-popup"><div class="btn-group"><label><input type="checkbox" checked="">Academic Year
						</label><label><input type="checkbox" checked="">Created Date
						</label><label><input type="checkbox" checked="">Status
						</label></div></div></div></div><table class="sv-table sv-table-striped sv-table-bordered tablesaw tablesaw-columntoggle" data-tablesaw-mode="columntoggle" id="table-517">
				<thead>
					<tr>
						<th data-tablesaw-priority="persist">ID
						</th><th data-tablesaw-priority="5" class="tablesaw-priority-5">Academic Year
						</th><th data-tablesaw-priority="3" class="tablesaw-priority-3">Created Date
						</th><th data-tablesaw-priority="4" class="tablesaw-priority-4">Status
						</th><th data-tablesaw-priority="persist">Action
					</th></tr>
				</thead>
				<tbody>

    <tr class="requestRow"><td>ER-PC1091_83842101</td><td class="tablesaw-priority-5">2016/7</td><td class="tablesaw-priority-3">23/May/2017</td><td class="tablesaw-priority-4">Awaiting Submission</td><td><div class="sv-col-md-6">
	<a class="sv-btn-block sv-btn sv-btn-default" id="openRequest" href="../run/SIW_YMHD.start_url?BF057B7E4C3E11E7p14X9MPvuhypBYt7wApkDuzXljFjcuY6fYkTJgJ5DTtpmMifU6g7WyRAi9G-egD1l8mKvyC8E2eMtd4iPVxn9jbnYbU8TgliXhHQFA8Vgdaw7YeIOBAOoL7Dc7HcVIlu3-VkbEjd_AWgyqYfhETJ0n-IOvl8BC0-thgYR3rM-df1Aj4UmCk5VXWpLYpRMTqlNFZneJU2a96KpVI0c2Vr-g">Open</a>
		</div><div class="sv-col-md-6"><a id="deleteRequest" class="sv-btn-block sv-btn sv-btn-danger" data-delete="" href="delete" target="_blank">Delete</a></div>

				</td></tr></tbody>
			</table>
		</div>

	</div>
</div>

<div id="pending" class="sv-panel sv-panel-success sv-panel-collapsible sv-panel-expanded">
	<div class="sv-panel-heading" role="heading" tabindex="0" id="sv-ph-c58e626e-8aa9-4d82-8527-2046ab5af50f" aria-controls="sv-pb-67b72578-294f-486c-8932-bb0e039e8f04" aria-expanded="true">RESD Requests Submitted</div>
	<div class="sv-panel-body" id="sv-pb-67b72578-294f-486c-8932-bb0e039e8f04" aria-labelledby="sv-ph-c58e626e-8aa9-4d82-8527-2046ab5af50f" aria-hidden="false">


		<div class="sv-text-center">No records found</div>
	</div>
</div>

<div id="complete" class="sv-panel sv-panel-info sv-panel-collapsible sv-panel-collapsed">
	<div class="sv-panel-heading" role="heading" tabindex="0" id="sv-ph-e5d8a278-cd62-4c9e-9c54-99e24b5fe750" aria-controls="sv-pb-09553254-2d89-43d0-8160-1ed658787422" aria-expanded="false">RESD Requests Completed</div>
	<div class="sv-panel-body sv-hide" id="sv-pb-09553254-2d89-43d0-8160-1ed658787422" aria-labelledby="sv-ph-e5d8a278-cd62-4c9e-9c54-99e24b5fe750" aria-hidden="true">
		<div class="sv-text-center">No records found</div>
	</div>
</div>
</div>
              <input type="hidden" name="DUM_FIXT.TTQ.MENSYS.1">
              <script>
sits_attach_event("window","load",function() {
	sits_collapsible_panel('#complete',false);
	sits_collapsible_panel('#unsubmitted, #pending',true);
	setTimeout(function () {
		$('#page').fadeIn();
	},500);
});
</script>
<style>
.requestRow td:first-of-type {word-break: break-word;}
</style>

          <input type="hidden" name="#.TTQ.MENSYS.1" value="AzJDMQ4SQ1JFU0QtU1RVVklFVwMiQzE="><input type="hidden" name="#CRC.TTQ.MENSYS.1" value="3AD96D3B">

      <input type="hidden" name="#.TTE.MENSYS.1-1" value="DhJDUkVTRC1TVFVWSUVXAyJDMQ=="><input type="hidden" name="#CRC.TTE.MENSYS.1-1" value="656BB66B">
                  </fieldset>
          </div>
        </div>
      </div>
      <div class="sv-panel-footer">
        <div class="sv-btn-container"><div class="sv-col-sm-2 sv-col-sm-offset-5"><input type="submit" title="Exit" value="Exit" name="SAVEX.DUMMY.MENSYS.1" class="sv-btn sv-btn-block sv-btn-default"></div></div>
      </div>
    </div>
  </div>
</div>
`;
