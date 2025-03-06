import { HashRouter, Routes, Route } from "react-router-dom";
import GlobalHeader from "./components/global-header";
import HomePage from "./pages/home";
import "./styles/app.scss";
import NotFound from "./pages/not-found";
import CameraPage from "./pages/camera-page";
import KVSStreamPage from "./pages/kvs-stream-page";
import MainCameraPage from "./pages/main-camera-page";
import SubCameraPage from "./pages/sub-camera-page";
import SummaryLogsPage from "./pages/summary-logs";
import SagemakerLogsPage from "./pages/sagemaker-logs";
import RobomakerLogsPage from "./pages/robomaker-logs";
import DockerLogsPage from "./pages/docker-logs";
import CompletedLapsPage from "./pages/completed-laps";
import TrainingMetricsPage from "./pages/training-metrics";
import CheckpointsPage from "./pages/checkpoints";
import InstanceStoragePage from "./pages/instance-storage";
import GPUStatusPage from "./pages/gpu-status";
import RewardFunctionPage from "./pages/reward-function";
import ModelMetadataPage from "./pages/model-metadata";
import HyperparametersPage from "./pages/hyperparameters";
import RunEnvPage from "./pages/run-env";
import SystemEnvPage from "./pages/system-env";
import GenAIPage from "./pages/genai";
import UsefulLinksPage from "./pages/useful-links";
import TrainingOverviewPage from "./pages/training-overview";
import TrainingProgressPage from "./pages/training-progress";
import TrainingQuintilesPage from "./pages/training-quintiles";
import TrainingHeatmapPage from "./pages/training-heatmap";
import TrainingDataTablesPage from "./pages/training-data-tables";
import TrainingCompleteLapPathsPage from "./pages/training-complete-lap-paths";
import ConnectToInstancePage from "./pages/connect-to-instance";
import BaseResourcesPage from "./pages/base-resources";
import AddAccessPage from "./pages/add-access";
import CreateSpotInstancePage from "./pages/create-spot-instance";
import CreateStandardInstancePage from "./pages/create-standard-instance";
import ImageBuilderPage from "./pages/image-builder";
import AddInterruptionNotificationSubscriptionPage from "./pages/add-interruption-notification-subscription";
import UpdateTrainingPage from "./pages/update-training";

export default function App() {
  const Router = HashRouter;

  return (
    <div style={{ height: "100%" }}>
      <Router>
        <GlobalHeader />
        <div style={{ height: "56px", backgroundColor: "#000716" }}>&nbsp;</div>
        <div>
          <Routes>
            <Route index path="/manage_training/connect_to_instance" element={<ConnectToInstancePage />} />
            <Route index path="/manage_training/update_training" element={<UpdateTrainingPage />} />
            <Route index path="/training_monitoring/training_overview" element={<TrainingOverviewPage />} />
            <Route index path="/training_monitoring/training_progress" element={<TrainingProgressPage />} />
            <Route index path="/training_monitoring/training_quintiles" element={<TrainingQuintilesPage />} />
            <Route index path="/training_monitoring/training_reward_heatmap" element={<TrainingHeatmapPage />} />
            <Route index path="/training_monitoring/training_data_tables" element={<TrainingDataTablesPage />} />
            <Route index path="/training_monitoring/training_complete_lap_paths" element={<TrainingCompleteLapPathsPage />} />
            <Route index path="/inspiration/useful_links" element={<UsefulLinksPage />} />
            <Route index path="/inspiration/genai" element={<GenAIPage />} />
            <Route index path="/training_config/system_env" element={<SystemEnvPage />} />
            <Route index path="/training_config/run_env" element={<RunEnvPage />} />
            <Route index path="/training_config/hyperparameters" element={<HyperparametersPage />} />
            <Route index path="/training_config/model_metadata" element={<ModelMetadataPage />} />
            <Route index path="/training_config/reward_function" element={<RewardFunctionPage />} />
            <Route index path="/instance_status/instance_storage" element={<InstanceStoragePage />} />
            <Route index path="/instance_status/gpu_status" element={<GPUStatusPage />} />
            <Route index path="/logs/checkpoints" element={<CheckpointsPage />} />
            <Route index path="/logs/training_metrics" element={<TrainingMetricsPage />} />
            <Route index path="/logs/completed_laps" element={<CompletedLapsPage />} />
            <Route index path="/logs/docker_logs" element={<DockerLogsPage />} />
            <Route index path="/logs/robomaker_logs" element={<RobomakerLogsPage />} />
            <Route index path="/logs/sagemaker_logs" element={<SagemakerLogsPage />} />
            <Route index path="/logs/summary_logs" element={<SummaryLogsPage />} />
            <Route index path="/video_feeds/camera" element={<CameraPage />} />
            <Route index path="/video_feeds/kvs_camera" element={<KVSStreamPage />} />
            <Route index path="/video_feeds/main_camera" element={<MainCameraPage />} />
            <Route index path="/video_feeds/sub_camera" element={<SubCameraPage />} />
            <Route index path="/understanding_dots/base_resources" element={<BaseResourcesPage />} />
            <Route index path="/understanding_dots/add_access" element={<AddAccessPage />} />
            <Route index path="/understanding_dots/add_interruption_notification_subscription" element={<AddInterruptionNotificationSubscriptionPage />} />
            <Route index path="/understanding_dots/create_spot_instance" element={<CreateSpotInstancePage />} />
            <Route index path="/understanding_dots/create_standard_instance" element={<CreateStandardInstancePage />} />
            <Route index path="/understanding_dots/image_builder" element={<ImageBuilderPage />} />
            <Route index path="/deepracer-menu" element={<HomePage />} />
            <Route index path="/deepracer-menu.html#/deepracer-menu" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
