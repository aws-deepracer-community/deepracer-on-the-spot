import {
  SideNavigation,
  SideNavigationProps,
} from "@cloudscape-design/components";
import { useNavigationPanelState } from "../common/hooks/use-navigation-panel-state";
import { useState } from "react";
import { useOnFollow } from "../common/hooks/use-on-follow";
import { APP_NAME } from "../common/constants";
import { useLocation } from "react-router-dom";

export default function NavigationPanel() {
  const location = useLocation();
  const onFollow = useOnFollow();
  const [navigationPanelState, setNavigationPanelState] =
    useNavigationPanelState();

  const [items] = useState<SideNavigationProps.Item[]>(() => {
    const items: SideNavigationProps.Item[] = [
      {
        type: "link",
        text: "Home",
        href: "/deepracer-menu",
      },
      {
        type: "section",
        text: "Video Feeds",
        items: [
          { type: "link", text: "Camera", href: "/video_feeds/camera" },
          { type: "link", text: "KVS Stream", href: "/video_feeds/kvs_camera" },
          { type: "link", text: "Main Camera", href: "/video_feeds/main_camera" },
          { type: "link", text: "Sub Camera", href: "/video_feeds/sub_camera" },
        ],
      },
      {
        type: "section",
        text: "Logs",
        items: [
          { type: "link", text: "Summary Logs", href: "/logs/summary_logs" },
          { type: "link", text: "SageMaker Logs", href: "/logs/sagemaker_logs" },
          { type: "link", text: "RoboMaker Logs", href: "/logs/robomaker_logs" },
          { type: "link", text: "Docker Logs", href: "/logs/docker_logs" },
          { type: "link", text: "Completed Laps", href: "/logs/completed_laps" },
          { type: "link", text: "Training Metrics", href: "/logs/training_metrics" },
          { type: "link", text: "Checkpoints", href: "/logs/checkpoints" },
        ],
      },
      {
        type: "section",
        text: "Instance Status",
        items: [
          { type: "link", text: "GPU Status", href: "/instance_status/gpu_status" },
          { type: "link", text: "Instance Storage", href: "/instance_status/instance_storage" },
        ],
      },
      {
        type: "section",
        text: "Training Config",
        items: [
          { type: "link", text: "system.env", href: "/training_config/system_env" },
          { type: "link", text: "run.env", href: "/training_config/run_env" },
          { type: "link", text: "Hyperparameters", href: "/training_config/hyperparameters" },
          { type: "link", text: "Model Metadata", href: "/training_config/model_metadata" },
          { type: "link", text: "Reward Function", href: "/training_config/reward_function" },
        ],
      },
      {
        type: "section",
        text: "Training Monitoring",
        items: [
          { type: "link", text: "Grafana Dashboard", href: "/update_to_grafana_url", external: true},
          { type: "link", text: "Training Overview", href: "/training_monitoring/training_overview" },
          { type: "link", text: "Training Progress", href: "/training_monitoring/training_progress" },
          { type: "link", text: "Training Quintiles", href: "/training_monitoring/training_quintiles" },
          { type: "link", text: "Training Reward Heatmap", href: "/training_monitoring/training_reward_heatmap" },
          { type: "link", text: "Training Data Tables", href: "/training_monitoring/training_data_tables" },
          { type: "link", text: "Training Complete Lap Paths", href: "/training_monitoring/training_complete_lap_paths" },
          { type: "link", text: "Jupyter Notebook", href: "/update_to_jupyter_url", external: true},
        ],
      },
      {
        type: "section",
        text: "Inspiration and Useful Links",
        items: [
          { type: "link", text: "Improve your racing with GenAI", href: "/inspiration/genai"},
          { type: "link", text: "Useful Links", href: "/inspiration/useful_links"},
        ],
      },
    ];

    items.push(
      { type: "divider" },
      {
        type: "link",
        text: "DeepRacer Documentation",
        href: "https://docs.aws.amazon.com/deepracer/",
        external: true,
      },
      {
        type: "link",
        text: "DeepRacer on the Spot Documentation",
        href: "https://github.com/aws-deepracer-community/deepracer-on-the-spot",
        external: true,
      }
    );

    return items;
  });

  const onChange = ({
    detail,
  }: {
    detail: SideNavigationProps.ChangeDetail;
  }) => {
    const sectionIndex = items.indexOf(detail.item);
    setNavigationPanelState({
      collapsedSections: {
        ...navigationPanelState.collapsedSections,
        [sectionIndex]: !detail.expanded,
      },
    });
  };

  return (
    <SideNavigation
      onFollow={onFollow}
      onChange={onChange}
      header={{ href: "/deepracer-menu", text: APP_NAME }}
      activeHref={location.pathname}
      items={items.map((value, idx) => {
        if (value.type === "section") {
          const collapsed =
            navigationPanelState.collapsedSections?.[idx] === true;
          value.defaultExpanded = !collapsed;
        }

        return value;
      })}
    />
  );
}
