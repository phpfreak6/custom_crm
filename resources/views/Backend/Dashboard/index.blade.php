@extends('layouts.main')
@section('content')

    <!-- Container for demo purpose -->
    <div class="container px-4">
		<!--Section: Content-->
		<section class="text-center">
			<div class="row gx-xl-5">
				<div class="col-lg-6 mb-xl-5 mb-4">
					<div class="card shadow-0 h-100">
						<div class="card-header py-3">
							<p class="mb-0">Users & Sessions</p>
						</div>
						<div class="card-body">
							<div class="d-flex justify-content-around">
								<div>
									<p class="mb-2">Users</p>
									<h5>38.6K</h5>
									<p class="text-success small">
										<i class="fas fa-caret-up me-1"></i><span>72.0%</span>
									</p>
								</div>
								<div>
									<p class="mb-2">Sessions</p>
									<h5>50.9K</h5>
									<p class="text-success small">
										<i class="fas fa-caret-up me-1"></i><span>82.0%</span>
									</p>
								</div>
								<div>
									<p class="mb-2">New Users</p>
									<h5>34.0K</h5>
									<p class="text-danger small">
										<i class="fas fa-caret-down me-1"></i><span>12.0%</span>
									</p>
								</div>
							</div>
							<div id="chart-users-sessions"></div>
						</div>
					</div>
				</div>

				<div class="col-lg-6 mb-xl-5 mb-4">
					<div class="card shadow-0 h-100">
						<div class="card-header py-3">
							<p class="mb-0">Revenue & Conversion Rate</p>
						</div>
						<div class="card-body">
							<div class="d-flex justify-content-around">
								<div>
									<p class="mb-2">Revenue</p>
									<h5>$5.35KK</h5>
									<p class="text-success small">
										<i class="fas fa-caret-up me-1"></i><span>-21.6%</span>
									</p>
								</div>
								<div>
									<p class="mb-2">Transactions</p>
									<h5>88</h5>
									<p class="text-danger small">
										<i class="fas fa-caret-down me-1"></i><span>-22.8%</span>
									</p>
								</div>
								<div>
									<p class="mb-2">Conversion</p>
									<h5>0.2%</h5>
									<p class="text-danger small">
										<i class="fas fa-caret-down me-1"></i><span>-1.7%</span>
									</p>
								</div>
							</div>
							<div id="chart-revenue-conversion"></div>
						</div>
					</div>
				</div>

				<div class="col-lg-6 mb-xl-5 mb-4">
					<div class="card shadow-0 h-100">
						<div class="card-header py-3">
							<p class="mb-0">Site Health</p>
						</div>
						<div class="card-body">
							<div class="d-flex justify-content-around">
								<div>
									<p class="mb-2">Bounce Rate</p>
									<h5>41.4%</h5>
									<p class="text-success small">
										<i class="fas fa-caret-down me-1"></i><span>-3.3%</span>
									</p>
								</div>
								<div>
									<p class="mb-2">Avg. Session Duration</p>
									<h5>03:20</h5>
									<p class="text-success small">
										<i class="fas fa-caret-up me-1"></i><span>3.6%</span>
									</p>
								</div>
								<div>
									<p class="mb-2">Avg. Page Load Time</p>
									<h5>3.9s</h5>
									<p class="text-danger small">
										<i class="fas fa-caret-up me-1"></i><span>12.0%</span>
									</p>
								</div>
							</div>
							<div id="chart-site-health"></div>
						</div>
					</div>
				</div>

				<div class="col-lg-6 mb-xl-5 mb-4">
					<div class="card shadow-0 h-100">
						<div class="card-header py-3">
							<p class="mb-0">Device Performance</p>
						</div>
						<div class="card-body d-flex align-items-center">
							<div class="w-100" id="chart-device-performance"></div>
						</div>
					</div>
				</div>

				<div class="col-lg-6 mb-xl-5 mb-4">
					<div class="card shadow-0 h-100">
						<div class="card-header py-3">
							<p class="mb-0">Transactions</p>
						</div>
						<div class="card-body d-flex align-items-center">
							<div class="w-100" id="chart-transactions"></div>
						</div>
					</div>
				</div>

				<div class="col-lg-6 mb-xl-5 mb-4">
					<div class="card shadow-0 h-100">
						<div class="card-header py-3">
							<p class="mb-0">Sessions</p>
						</div>
						<div class="card-body">
							<div class="px-lg-5 mx-lg-5" id="chart-sessions"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
      <!--Section: Content-->
	</div>
    <!-- Container for demo purpose -->
@endsection
@section('scripts')
@parent
@endsection